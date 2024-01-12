using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using OrderDelivery.Application.Commands;
using OrderDelivery.Application.DTOs;
using OrderDelivery.Application.Queries;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace OrderDelivery.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IMediator _mediator;

        public OrderController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet("GetAll")]
        [ProducesDefaultResponseType(typeof(List<OrderResponseDTO>))]
        public async Task<IActionResult> GetAllOrders(CancellationToken token)
        {
            return Ok(await _mediator.Send(new GetOrdersQuery(), token).ConfigureAwait(false));
        }

        [HttpGet("{orderId}")]
        [ProducesDefaultResponseType(typeof(OrderResponseDTO))]
        public async Task<IActionResult> GetOrder([FromRoute] Guid orderId, CancellationToken token)
        {
            var result = await _mediator.Send(new GetOrderQuery(orderId), token).ConfigureAwait(false);

            if (result == null)
            {
                return NotFound();
            }
            return Ok(result);
        }

        [HttpPost("Create")]
        [ProducesDefaultResponseType(typeof(CreateOrderResponseDTO))]
        public async Task<IActionResult> CreateOrder([FromBody] CreateOrderCommand order, CancellationToken token)
        {
            CreateOrderResponseDTO response = new();

            if (!ModelState.IsValid)
            {
                response.Errors = new (
                    ModelState
                        .Where(item => item.Value.ValidationState == ModelValidationState.Invalid)
                        .Select(item => 
                        (
                            item.Key,
                            item.Value.Errors.Select(err => err.ErrorMessage).ToList()
                        ))
                        .ToDictionary()
                );

                //foreach (var item in ModelState)
                //{
                //    if (item.Value.ValidationState == ModelValidationState.Invalid)
                //    {
                //        response.Errors.Add(item.Key, item.Value.Errors.Select(err => err.ErrorMessage).ToList());
                //    }
                //}

                return BadRequest(response);
            }

            response.OrderId = await _mediator.Send(order, token).ConfigureAwait(false);

            if (response.OrderId == Guid.Empty)
            {
                return BadRequest();
            }
            return Ok(response);
        }
    }
}

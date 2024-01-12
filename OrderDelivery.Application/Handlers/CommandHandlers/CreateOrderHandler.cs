using AutoMapper;
using MediatR;
using Microsoft.Extensions.Logging;
using OrderDelivery.Application.Commands;
using OrderDelivery.Core.Interfaces;
using OrderDelivery.Core.Models;

namespace OrderDelivery.Application.Handlers.CommandHandlers
{
    public class CreateOrderHandler : IRequestHandler<CreateOrderCommand, Guid>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly ILogger _logger;

        public CreateOrderHandler(IUnitOfWork unitOfWork, IMapper mapper, ILogger<CreateOrderHandler> logger)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _logger = logger;
        }

        public async Task<Guid> Handle(CreateOrderCommand request, CancellationToken cancellationToken)
        {
            try
            {
                Order order = _mapper.Map<Order>(request);

                Order result = await _unitOfWork.Orders.AddAsync(order, cancellationToken).ConfigureAwait(false);
                await _unitOfWork.SaveChangesAsync().ConfigureAwait(false);

                return result.Id;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message, ex);
                return Guid.Empty;
            }
        }
    }
}

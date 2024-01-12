using AutoMapper;
using MediatR;
using OrderDelivery.Application.DTOs;
using OrderDelivery.Application.Queries;
using OrderDelivery.Core.Interfaces;

namespace OrderDelivery.Application.Handlers.QueryHandlers
{
    public class GetOrderHandler : IRequestHandler<GetOrderQuery, OrderResponseDTO>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public GetOrderHandler(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<OrderResponseDTO> Handle(GetOrderQuery request, CancellationToken cancellationToken)
        {
            var order = await _unitOfWork.Orders.GetAsync(request.Id, cancellationToken).ConfigureAwait(false);
            return _mapper.Map<OrderResponseDTO>(order);
        }
    }
}

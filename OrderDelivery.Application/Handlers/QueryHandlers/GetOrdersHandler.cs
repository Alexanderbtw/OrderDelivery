using AutoMapper;
using MediatR;
using OrderDelivery.Application.DTOs;
using OrderDelivery.Application.Queries;
using OrderDelivery.Core.Interfaces;

namespace OrderDelivery.Application.Handlers.QueryHandlers
{
    public class GetOrdersHandler : IRequestHandler<GetOrdersQuery, List<OrderResponseDTO>>
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public GetOrdersHandler(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public async Task<List<OrderResponseDTO>> Handle(GetOrdersQuery request, CancellationToken cancellationToken)
        {
            var orders = await _unitOfWork.Orders.GetAllAsync(cancellationToken).ConfigureAwait(false);
            return _mapper.Map<List<OrderResponseDTO>>(orders);
        }
    }
}

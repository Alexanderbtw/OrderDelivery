using MediatR;
using OrderDelivery.Application.DTOs;

namespace OrderDelivery.Application.Queries
{
    public class GetOrderQuery : IRequest<OrderResponseDTO>
    {
        public Guid Id { get; set; }
        public GetOrderQuery(Guid id)
        {
            Id = id;
        }
    }
}

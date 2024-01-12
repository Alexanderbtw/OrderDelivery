using MediatR;
using OrderDelivery.Application.DTOs;

namespace OrderDelivery.Application.Queries
{
    public class GetOrdersQuery : IRequest<List<OrderResponseDTO>>
    {
    }
}

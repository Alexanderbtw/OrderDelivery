using AutoMapper;
using OrderDelivery.Application.Commands;
using OrderDelivery.Core.Models;

namespace OrderDelivery.Application.MappingProfiles
{
    public class RequestToDomain : Profile
    {
        public RequestToDomain()
        {
            CreateMap<CreateOrderCommand, Order>();
        }
    }
}

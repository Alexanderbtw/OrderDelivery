using AutoMapper;
using OrderDelivery.Application.DTOs;
using OrderDelivery.Core.Models;

namespace OrderDelivery.Application.MappingProfiles
{
    public class DomainToResponse : Profile
    {
        public DomainToResponse()
        {
            CreateMap<Order, OrderResponseDTO>();
        }
    }
}

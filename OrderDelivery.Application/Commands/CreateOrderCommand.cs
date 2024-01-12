using MediatR;
using System.ComponentModel.DataAnnotations;

namespace OrderDelivery.Application.Commands
{
    public class CreateOrderCommand : IRequest<Guid>
    {
        [StringLength(50, MinimumLength = 1)] 
        public string SenderCity { get; set; }

        [StringLength(250, MinimumLength = 1)] 
        public string SenderAdress { get; set; }

        [StringLength(50, MinimumLength = 1)] 
        public string ReceiverCity { get; set; }

        [StringLength(250, MinimumLength = 1)] 
        public string ReceiverAdress { get; set; }

        [Range(0, UInt16.MaxValue)] 
        public decimal Weight { get; set; }

        public DateOnly CollectionDate { get; set; }
    }
}

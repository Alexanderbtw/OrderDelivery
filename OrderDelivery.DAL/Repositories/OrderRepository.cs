using OrderDelivery.Core.Interfaces;
using OrderDelivery.Core.Models;

namespace OrderDelivery.DAL.Repositories
{
    public class OrderRepository : GenericRepository<Order, DeliveryDbContext>, IOrderRepository
    {
        public OrderRepository(DeliveryDbContext context) : base(context) { }

        public override Task<Order> AddAsync(Order entity, CancellationToken token = default)
        {
            return base.AddAsync(entity, token);
        }
    }
}

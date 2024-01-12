using OrderDelivery.Core.Interfaces;

namespace OrderDelivery.DAL.Repositories
{
    public class UnitOfWork : IUnitOfWork, IDisposable
    {
        private readonly DeliveryDbContext _context;
        public IOrderRepository Orders { get; }

        public UnitOfWork(DeliveryDbContext context)
        {
            _context = context;

            Orders = new OrderRepository(context);
        }

        public async Task<bool> SaveChangesAsync()
        {
            var res = await _context.SaveChangesAsync().ConfigureAwait(false);
            return res > 0;
        }

        public void Dispose()
        {
            _context.Dispose();
            GC.SuppressFinalize(this);
        }
    }
}

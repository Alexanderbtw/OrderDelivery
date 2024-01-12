namespace OrderDelivery.Core.Interfaces
{
    public interface IUnitOfWork
    {
        IOrderRepository Orders { get; }

        Task<bool> SaveChangesAsync();
    }
}

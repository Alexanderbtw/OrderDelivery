using Microsoft.EntityFrameworkCore;
using OrderDelivery.Core.Models;
using OrderDelivery.DAL.Configurations;

namespace OrderDelivery.DAL
{
    public class DeliveryDbContext : DbContext
    {
        public DbSet<Order> Orders { get; set; }

        public DeliveryDbContext(DbContextOptions<DeliveryDbContext> options) : base(options)
        {
            Database.Migrate();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new OrdersConfiguration());

            base.OnModelCreating(modelBuilder);
        }
    }
}

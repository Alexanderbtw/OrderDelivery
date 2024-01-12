using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using OrderDelivery.Core.Models;

namespace OrderDelivery.DAL.Configurations
{
    public class OrdersConfiguration : IEntityTypeConfiguration<Order>
    {
        public void Configure(EntityTypeBuilder<Order> builder)
        {
            builder.Property(o => o.SenderCity).HasMaxLength(50);
            builder.Property(o => o.ReceiverCity).HasMaxLength(50);
            builder.Property(o => o.SenderAdress).HasMaxLength(250);
            builder.Property(o => o.ReceiverAdress).HasMaxLength(250);
            builder.ToTable(t => {
                t.HasCheckConstraint("ValidWeight", "Weight > 0");
            });
        }
    }
}

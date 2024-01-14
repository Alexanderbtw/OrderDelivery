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
            builder.Property(o => o.SenderAddress).HasMaxLength(250);
            builder.Property(o => o.ReceiverAddress).HasMaxLength(250);
        }
    }
}

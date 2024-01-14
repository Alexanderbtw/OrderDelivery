namespace OrderDelivery.Core.Models
{
    public class Order
    {
        public Guid Id { get; set; }
        public string SenderCity { get; set; } = string.Empty;
        public string SenderAddress { get; set; } = string.Empty;
        public string ReceiverCity { get; set; } = string.Empty;
        public string ReceiverAddress { get; set; } = string.Empty;
        public decimal Weight { get; set; }
        public DateOnly CollectionDate { get; set; }
    }
}

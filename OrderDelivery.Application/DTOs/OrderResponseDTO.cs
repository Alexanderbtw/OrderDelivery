namespace OrderDelivery.Application.DTOs
{
    public class OrderResponseDTO
    {
        public Guid Id { get; set; }
        public string SenderCity { get; set; }
        public string SenderAddress { get; set; }
        public string ReceiverCity { get; set; }
        public string ReceiverAddress { get; set; }
        public decimal Weight { get; set; }
        public DateOnly CollectionDate { get; set; }
    }
}

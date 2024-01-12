namespace OrderDelivery.Application.DTOs
{
    public class OrderResponseDTO
    {
        public Guid Id { get; set; }
        public string SenderCity { get; set; }
        public string SenderAdress { get; set; }
        public string ReceiverCity { get; set; }
        public string ReceiverAdress { get; set; }
        public decimal Weight { get; set; }
        public DateOnly CollectionDate { get; set; }
    }
}

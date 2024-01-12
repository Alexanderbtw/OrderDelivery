namespace OrderDelivery.Application.DTOs
{
    public class CreateOrderResponseDTO
    {
        public Guid? OrderId { get; set; } = null;
        public Dictionary<string, List<string>> Errors { get; set; } = new();
    }
}

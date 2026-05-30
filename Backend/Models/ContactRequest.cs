namespace Backend.Models;

public class ContactRequest
{
    public int Id { get; set; }

    public string Name { get; set; } = string.Empty;

    public string Email { get; set; } = string.Empty;

    public string Company { get; set; } = string.Empty;

    public string Package { get; set; } = string.Empty;

    public string Message { get; set; } = string.Empty;

    public string Status { get; set; } = "Ny";

    public DateTime CreatedAt { get; set; } = DateTime.Now;
}
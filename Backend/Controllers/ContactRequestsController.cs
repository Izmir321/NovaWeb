using Backend.Data;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ContactRequestsController : ControllerBase
{
    private readonly AppDbContext _context;

    public ContactRequestsController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<ContactRequest>>> GetContactRequests()
    {
        return await _context.ContactRequests
            .OrderByDescending(x => x.CreatedAt)
            .ToListAsync();
    }

    [HttpPost]
    public async Task<ActionResult<ContactRequest>> CreateContactRequest(ContactRequest request)
    {
        request.Status = "Ny";
        request.CreatedAt = DateTime.Now;

        _context.ContactRequests.Add(request);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetContactRequests), new { id = request.Id }, request);
    }

    [HttpPut("{id}/status")]
    public async Task<IActionResult> UpdateStatus(int id, [FromBody] string status)
    {
        var request = await _context.ContactRequests.FindAsync(id);

        if (request == null)
        {
            return NotFound();
        }

        request.Status = status;
        await _context.SaveChangesAsync();

        return NoContent();
    }





    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteContactRequest(int id)
    {
        var request = await _context.ContactRequests.FindAsync(id);

        if (request == null)
        {
            return NotFound();
        }

        _context.ContactRequests.Remove(request);
        await _context.SaveChangesAsync();

        return NoContent();
    }




}


using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PdqOnline.Models;

namespace PdqOnline.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly EmployeeContext _employeeContext;

        public EmployeeController(EmployeeContext employeeContext)
        {
            _employeeContext = employeeContext;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<pdqEmployee>>> GetEmployees()
        {
            if (_employeeContext.pdqEmployees == null)
            {
                return NotFound();
            }
            return await _employeeContext.pdqEmployees.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<pdqEmployee>> GetEmployee(int id)
        {
            if (_employeeContext.pdqEmployees == null)
            {
                return NotFound();
            }
            var employee = await _employeeContext.pdqEmployees.FindAsync(id);
            if (employee == null)
            {
                return NotFound(id);
            }
            return employee;
        }

        [HttpPost]
        public async Task<ActionResult<pdqEmployee>> PostEmployee(pdqEmployee employee)
        {
            _employeeContext.pdqEmployees.Add(employee);
            await _employeeContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetEmployee), new { id = employee.ID }, employee);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> PutEmployee(int id, pdqEmployee employee)
        {
            if (id != employee.ID)
            {
                return BadRequest();
            }
            _employeeContext.Entry(employee).State = EntityState.Modified;
            try
            {
                await _employeeContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteEmployee(int id)
        {
            if (_employeeContext.pdqEmployees == null)
            {
                return NotFound();
            }
            var employee = await _employeeContext.pdqEmployees.FindAsync(id);
            if (employee == null)
            {
                return NotFound();
            }
            _employeeContext.pdqEmployees.Remove(employee);
            await _employeeContext.SaveChangesAsync();

            return Ok();
        }
    }
}

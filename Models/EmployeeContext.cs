using Microsoft.EntityFrameworkCore;

namespace PdqOnline.Models
{
    public class EmployeeContext : DbContext
    {
        public EmployeeContext(DbContextOptions<EmployeeContext> options) : base(options)
        {

        }
        public DbSet<pdqEmployee> pdqEmployees { get; set; }
    }
}

using Microsoft.EntityFrameworkCore;
using PdqOnline.Models;


var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddDbContext<EmployeeContext>(options => // Added
options.UseSqlServer(builder.Configuration.GetConnectionString("CrudCS"))); // Added

builder.Services.AddControllers();
builder.Services.AddControllersWithViews(); // Added

builder.Services.AddEndpointsApiExplorer(); // Added
builder.Services.AddSwaggerGen(); // Added

builder.Services.AddCors(); // Added

var app = builder.Build();

// Configure the HTTP request pipeline.
/*if (!app.Environment.IsDevelopment())*/
if (app.Environment.IsDevelopment())
{
    app.UseSwagger(); // Added
    app.UseSwaggerUI(); // Added
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

// Adding Cors Protection
app.UseCors(builder =>
{
    builder
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader();
});

app.UseHttpsRedirection();
app.UseAuthorization(); // Add middleware method used in ASP.NET Core applications to enable authorization for incoming HTTP requests.
app.MapControllers(); // Added
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); 

app.Run();

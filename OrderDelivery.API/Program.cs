using Microsoft.EntityFrameworkCore;
using OrderDelivery.Application;
using OrderDelivery.Core.Interfaces;
using OrderDelivery.DAL;
using OrderDelivery.DAL.Repositories;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<DeliveryDbContext>(options => options.UseNpgsql(Environment.GetEnvironmentVariable("ConnectionString")));
builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();
builder.Services.AddApplication();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

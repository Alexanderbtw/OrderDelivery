using Microsoft.EntityFrameworkCore;
using OrderDelivery.Application;
using OrderDelivery.Core.Interfaces;
using OrderDelivery.DAL;
using OrderDelivery.DAL.Repositories;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddLogging();
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

string host = Environment.GetEnvironmentVariable("DB_HOST") ?? "localhost";
string port = Environment.GetEnvironmentVariable("DB_PORT") ?? "5432";
string db_name = Environment.GetEnvironmentVariable("DB_DATABASE") ?? "orderdelivery";
string db_username = Environment.GetEnvironmentVariable("DB_USERNAME") ?? "ps_user";
string db_password = Environment.GetEnvironmentVariable("DB_PASSWORD") ?? "ps_pass";
string db_setting = String.Format("Host={0}; Port={1}; User ID={2}; Password={3}; Database={4}; CommandTimeout=300;", host, port, db_username, db_password, db_name);

builder.Services.AddDbContext<DeliveryDbContext>(options => options.UseNpgsql(db_setting));
builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();
builder.Services.AddApplication();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.UseCors(policyBuilder =>
{
    policyBuilder.AllowAnyHeader();
    policyBuilder.WithOrigins("http://localhost:3000", "http://app:3000");
    policyBuilder.AllowAnyMethod();
});

app.Run();

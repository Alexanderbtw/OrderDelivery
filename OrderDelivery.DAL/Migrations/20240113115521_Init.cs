using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OrderDelivery.DAL.Migrations
{
    /// <inheritdoc />
    public partial class Init : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Orders",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uuid", nullable: false),
                    SenderCity = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false),
                    SenderAddress = table.Column<string>(type: "character varying(250)", maxLength: 250, nullable: false),
                    ReceiverCity = table.Column<string>(type: "character varying(50)", maxLength: 50, nullable: false),
                    ReceiverAddress = table.Column<string>(type: "character varying(250)", maxLength: 250, nullable: false),
                    Weight = table.Column<decimal>(type: "numeric", nullable: false),
                    CollectionDate = table.Column<DateOnly>(type: "date", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Orders", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Orders");
        }
    }
}

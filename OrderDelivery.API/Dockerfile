#See https://aka.ms/customizecontainer to learn how to customize your debug container and how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
USER app
WORKDIR /app
EXPOSE 8085

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["OrderDelivery.API/OrderDelivery.API.csproj", "OrderDelivery.API/"]
COPY ["OrderDelivery.Application/OrderDelivery.Application.csproj", "OrderDelivery.Application/"]
COPY ["OrderDelivery.Core/OrderDelivery.Core.csproj", "OrderDelivery.Core/"]
COPY ["OrderDelivery.DAL/OrderDelivery.DAL.csproj", "OrderDelivery.DAL/"]
RUN dotnet restore "./OrderDelivery.API/./OrderDelivery.API.csproj"
COPY . .
WORKDIR "/src/OrderDelivery.API"
RUN dotnet build "./OrderDelivery.API.csproj" -c $BUILD_CONFIGURATION -o /app/build

FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "./OrderDelivery.API.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "OrderDelivery.API.dll"]
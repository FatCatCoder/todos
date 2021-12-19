FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 5197
EXPOSE 7006
FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["CSharp.csproj", "./"]
RUN dotnet restore "./CSharp.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "CSharp.csproj" -c Release -o /app/build
FROM build AS publish
RUN dotnet publish "CSharp.csproj" -c Release -o /app/publish
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "CSharp.dll"]
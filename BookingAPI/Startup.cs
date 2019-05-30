using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using BookingAPI.Services;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Newtonsoft.Json.Serialization;
using Newtonsoft.Json;

namespace BookingAPI
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            var sqlServer = Environment.GetEnvironmentVariable("SQLSERVER");
            var sqlDatabase = Environment.GetEnvironmentVariable("SQLDATABSE");
            var sqlUser = Environment.GetEnvironmentVariable("SQLUSER");
            var sqlPassword = Environment.GetEnvironmentVariable("SQLPASSWORD");
            var server = Environment.GetEnvironmentVariable("db");
            var connectionString = string.Format("Server={0};Database={1};User Id={2};Password={3}",
                                                sqlServer, sqlDatabase, sqlUser, sqlPassword);
            services.AddDbContext<BookingDbContext>(o => o.UseSqlServer(connectionString));
            services.AddMvc().AddJsonOptions(options => {
                options.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
                options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, BookingDbContext bc)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseStaticFiles();
            app.UseMvc();
            
            bc.CreateSeedData();
            app.Run(async (context) =>
            {
                await context.Response.WriteAsync("Hello World!");
            });
        }
    }
}

using System.Text.Encodings.Web;
using Microsoft.AspNetCore.Mvc;


namespace Kiberlab.Controllers
{
    public class HelloWorldController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Welcome(string name, int numTimes = 1)
        {
            this.ViewData["Message"] = "Hello " + name;
            this.ViewData["NumTimes"] = numTimes;
            
            return this.View();
        }


    }
}

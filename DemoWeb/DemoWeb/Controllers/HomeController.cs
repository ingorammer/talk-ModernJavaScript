using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace DemoWeb.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index(string demo)
        {
            if (demo == null)
            {
                ViewBag.Demos = DemoHelper.GetDemoNames(HttpContext);
                return View();
            }
            else
            {
                if (DemoHelper.DemoExists(HttpContext, demo))
                {
                    var content = DemoHelper.GetHtmlContent(HttpContext, demo);
                    ViewBag.HtmlContent = content;
                    ViewBag.BaseUrl = "/Demos/" + demo;
                    return View("Demo");
                }
                else
                {
                    return View();
                }
            }
        }
    }

    public class DemoHelper
    {
        public static List<string> GetDemoNames(HttpContextBase context)
        {
            List<string> lst = new List<string>();
            var directory = context.Server.MapPath("~/Demos/");
            return Directory.GetDirectories(directory).Select(p => new DirectoryInfo(p).Name).ToList();
        }

        public static bool DemoExists(HttpContextBase context, string demo)
        {
            return GetDemoNames(context).Contains(demo, StringComparer.OrdinalIgnoreCase);
        }

        public static string GetHtmlContent(HttpContextBase context, string demo)
        {
            var directory = context.Server.MapPath("~/Demos/" + demo);

            if (File.Exists(directory + "/demo.html"))
            {
                return File.ReadAllText(directory + "/demo.html");
            }
            else
            {
                return File.ReadAllText(context.Server.MapPath("~/DemoInfrastructure/DemoHost.html"));
            }
        }
    }
}

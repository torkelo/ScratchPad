﻿using System.Collections.Generic;
using System.Web.Mvc;

namespace BBoneTrader.Web.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Auctions()
        {
            return Json(new List<Temp>()
                                      {
                                          new Temp()
                                              {
                                                  Id = 1,
                                                  Title = "asd",
                                                  Description = "hello"
                                              },
                                              new Temp()
                                              {
                                                  Id = 2,
                                                  Title = "aasdasdsd",
                                                  Description = "asdsada ello"
                                              }
                                      }, JsonRequestBehavior.AllowGet);
        }
    }

    public class Temp
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
    }
}
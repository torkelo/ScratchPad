using System.Collections.Generic;
using System.Web.Http;

namespace BBoneTrader.Web.Controllers
{
    public class AuctionsController : ApiController
    {
        public IList<Temp> Get()
        {
            return new List<Temp>()
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
                                      };
        }
    }
}
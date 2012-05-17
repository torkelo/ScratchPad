using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using Raven.Client;
using System.Threading.Tasks;
using System.Net.Http;
using System.Web.Http.Controllers;
using System.Threading;

namespace BBoneTrader.Web.Controllers
{
    public class RavenDbApiController : ApiController
    {
        public IDocumentSession Session { get; set; }

        public override Task<HttpResponseMessage> ExecuteAsync(HttpControllerContext controllerContext, CancellationToken cancellationToken)
        {
            Session = Global.DocumentStore.OpenSession();

            return base.ExecuteAsync(controllerContext, cancellationToken)
                .ContinueWith(task =>
                {
                    using (Session)
                    {
                        if (task.Status != TaskStatus.Faulted && Session != null)
                        {
                            Session.SaveChanges();
                        }
                        return task;
                    }
                }).Unwrap();
        }
    }
}
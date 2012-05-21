using SignalR.Hubs;

namespace BackboneDemos.Controllers
{
    public class DevSumHub : Hub
    {
        public void SaySomething(string text)
        {
            Clients.Hello(text);
        }
    }
}
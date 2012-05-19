using BBoneTrader.Web.Logging;
using BBoneTrader.Web.Models;
using SignalR;

namespace BBoneTrader.Web.Hubs
{
    public static class TraderHubUtil
    {
         public static void BroadcastBidPlacedFor(Auction auction)
         {
             var clientManager = GlobalHost.DependencyResolver.Resolve<IConnectionManager>();
             var hub = clientManager.GetHubContext<TraderHub>();
             hub.Clients.bidPlaced(new { auction.Id, auction.HighestBid, auction.Bids, NewBid = true });
         }

        public static void BroadcastNewAuction(Auction auction)
        {
            var clientManager = GlobalHost.DependencyResolver.Resolve<IConnectionManager>();
            var hub = clientManager.GetHubContext<TraderHub>();
            hub.Clients.newAuction(auction);
        }

        public static void BroadcastLogMessage(LogMessage logMessage)
        {
            var clientManager = GlobalHost.DependencyResolver.Resolve<IConnectionManager>();
            var hub = clientManager.GetHubContext<TraderHub>();
            hub.Clients["log"].newLogMessage(new LogMessageViewModel(logMessage));
        }
    }
}
﻿namespace BBoneTrader.Web.Models
{
    public class Auction
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int Bids { get; set; }
        public int MaxBid { get; set; }
    }
}
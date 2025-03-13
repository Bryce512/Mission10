using System.Security.Cryptography;
using Microsoft.AspNetCore.Mvc;
using Mission10.Models;

namespace Mission10.Controllers;

[ApiController]
[Route("[controller]")]
public class BowlersController : ControllerBase
{
   private BowlingLeagueContext _context;
   public BowlersController(BowlingLeagueContext temp)
   {
      _context = temp;
   }
   
   [HttpGet(Name = "GetBowlers")]
   public IEnumerable<Bowler> Get()
   {
      IEnumerable<Bowler> bowlersList = _context.Bowlers.ToList();
      
      return bowlersList;
   }
}
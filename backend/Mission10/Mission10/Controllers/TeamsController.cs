using System.Security.Cryptography;
using Microsoft.AspNetCore.Mvc;
using Mission10.Models;

namespace Mission10.Controllers;

[ApiController]
[Route("[controller]")]
public class TeamsController : ControllerBase
{
   private BowlingLeagueContext _context;
   public TeamsController(BowlingLeagueContext temp)
   {
      _context = temp;
   }
   
   [HttpGet(Name = "GetTeams")]
   public IEnumerable<Team> Get()
   {
      IEnumerable<Team> teamsList = _context.Teams.ToList();
      
      return teamsList;
   }
}

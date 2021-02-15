using Microsoft.AspNetCore.Mvc;
using System;
using WebReaderApp.ClientApp.src.Data;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ClientApp.src.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ControllerBase
    {
        private readonly IBookRepository _repository;

        public BookController(IBookRepository repository)
        {
            _repository = repository;
        }

        //GET api/<ValuesController>/5
        [HttpGet]
        public IActionResult GetBook()
        {

            var results = _repository.GetBook();

            return Ok(results);
         
        }


        // GET api/<ValuesController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetAllBooks()
        {

            try
            {
                var results = await _repository.GetAllBooksAsync();

                return Ok(results);
            }
            catch (Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Database Failure");
            };

        }

    }
}

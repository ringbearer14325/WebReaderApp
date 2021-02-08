using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebReaderApp.ClientApp.src.Data;
using WebReaderApp.ClientApp.src.Data.Entities;

namespace WebReaderApp.ClientApp.src.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CourseController : ControllerBase
    {

        private readonly ICourseRepository _repository;

        public CourseController(ICourseRepository repository)
        {
            _repository = repository;
           
        }

        // GET api/<ValuesController>/5
        [HttpGet("{id}")]
        public IActionResult GetCourse(string course)
        {
            //return new Course;
            return Ok(new { moniker = "Course" });
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetAllCourses()
        {


            try
            {
                var results = await _repository.GetAllCoursesAsync();

                return Ok(results);
            }
            catch (Exception)
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Database Failure");
            };


        }



    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebReaderApp.ClientApp.src.Data.Entities;

namespace WebReaderApp.ClientApp.src.Data
{
    public interface ICourseRepository
    {
        // general
        void Add<T>(T entity) where T : class;
        void Delete<T> (T entity) where T : class;
        Task<bool> SaveChangesAsync();


        // courses
        Task<Course[]> GetAllCoursesAsync();
        Task<Course> GetCourseAsync(int courseId, string courseName);

    }
}

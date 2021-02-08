using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebReaderApp.ClientApp.src.Data.Entities;

namespace WebReaderApp.ClientApp.src.Data
{
    public interface IBookRepository
    {
        
        // general
        void Add<T>(T entity) where T : class;
        void Delete<T> (T entity) where T : class;
        Task<bool> SaveChangesAsync();

        // books
        Task<Book[]> GetAllBooksAsync();
        Task<Book> GetBookAsync(int bookId, string bookName, string content);
        
        
      


    }
}

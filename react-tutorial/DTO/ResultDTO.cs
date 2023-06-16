using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace react_tutorial.DTO
{
    public class ResultDTO<T>
    {
        public bool IsSuccess { get; set; }

        public T Data { get; set; }

        public string Message { get; set; }
    }
}

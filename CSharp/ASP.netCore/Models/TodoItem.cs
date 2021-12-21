namespace TodoApi.Models
{
    public class TodoItem
    {
        public long id { get; set; }
        public string? title { get; set; }
        public bool complete { get; set; }
    }
}
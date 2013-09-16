﻿namespace WebFormsTemplate.Models
{
    public class Post
    {
        public int Id { get; set; }

        public string Text { get; set; }

        public virtual ApplicationUser User { get; set; }
    }
}
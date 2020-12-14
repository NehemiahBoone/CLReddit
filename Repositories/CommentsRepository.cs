using System;
using System.Collections.Generic;
using System.Data;
using CLReddit.Models;
using Dapper;

namespace CLReddit.Repositories
{
  public class CommentsRepository
  {
    private readonly IDbConnection _db;
    public CommentsRepository(IDbConnection db)
    {
      _db = db;
    }

    internal IEnumerable<Comment> GetCommentsByPostId(int id)
    {
      string sql = "SELECT * FROM comments WHERE postId = @id";

      return _db.Query<Comment>(sql, new { id });
    }
  }
}
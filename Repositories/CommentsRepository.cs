using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using CLReddit.Models;
using Dapper;

namespace CLReddit.Repositories
{
  public class CommentsRepository
  {
    private readonly IDbConnection _db;
    private readonly string populateCreator = @"SELECT
            comment.*,
            profile.*
            FROM comments comment
            JOIN profiles profile on comment.creatorId = profile.Id ";

    public CommentsRepository(IDbConnection db)
    {
      _db = db;
    }

    internal IEnumerable<Comment> GetCommentsByPostId(int id)
    {
      string sql = "SELECT * FROM comments WHERE postId = @id";

      return _db.Query<Comment>(sql, new { id });
    }

    internal Comment GetById(int id)
    {
      string sql = populateCreator + "WHERE comment.id = @id";
      return _db.Query<Comment, Profile, Comment>(sql, (comment, profile) => { comment.Creator = profile; return comment; }, new { id }, splitOn: "id").FirstOrDefault();
    }

    internal int CreateComment(Comment newComment)
    {
      string sql = @"
      INSERT INTO comments
      (creatorId, postId, text)
      VALUES
      (@CreatorId, @PostId, @Text);
      SELECT LAST_INSERT_ID();";
      return _db.ExecuteScalar<int>(sql, newComment);
    }

    internal Comment EditComment(Comment editedComment)
    {
      string sql = @"
      UPDATE comments
      SET
      creatorId = @CreatorId,
      name = @Name,
      description = @Description,
      img = @Img,
      views = @Views,
      shares = @Shares,
      keeps = @Keeps
      WHERE id = @Id;";
      _db.Execute(sql, editedComment);
      return editedComment;
    }
  }
}
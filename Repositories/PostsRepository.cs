using System;
using System.Collections.Generic;
using System.Data;
using CLReddit.Models;
using Dapper;

namespace CLReddit.Repositories
{
  public class PostsRepository
  {
    private readonly IDbConnection _db;
    private readonly string populateCreator = @"SELECT
            post.*,
            profile.*
            FROM posts post
            JOIN profiles profile on post.creatorId = profile.Id ";


    public PostsRepository(IDbConnection db)
    {
      _db = db;
    }

    internal IEnumerable<Post> GetAll()
    {
      string sql = populateCreator;
      return _db.Query<Post, Profile, Post>(sql, (post, profile) => { post.Creator = profile; return post; }, splitOn: "id");
    }
  }
}
package org.nocoder.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.codehaus.jackson.map.deser.ValueInstantiators;
import org.nocoder.model.Article;
import org.nocoder.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class IndexController extends BaseController{
	// private Logger logger = Logger.getLogger(IndexController.class);
	@Autowired
	private ArticleService articleService;

	@RequestMapping({ "/index" })
	public String toIndex(HttpServletRequest request, Model model) {
		String tag = request.getParameter("tag");
		int state = 2;
		Integer page = Integer.valueOf(Integer.parseInt(request.getParameter("page") == null ? "1" : request.getParameter("page")));
		Integer pageSize = Integer.valueOf(1);
		Object[] result = queryArticlesByPage(state, tag, page, pageSize);
		// 获取文章时间列表
		List<String> timeList = articleService.getArticleTimeList();
		// get article tags
		List<String> tagList = articleService.getArticleTagList();
		@SuppressWarnings("unchecked")
		List<Article> articleList = (List<Article>) result[0];
		model.addAttribute("articleList", articleList);
		model.addAttribute("timeList", timeList);
		model.addAttribute("tagList", tagList);
		model.addAttribute("page", page);
		model.addAttribute("totalPages", result[1]);
		return "index";
	}
	
	@RequestMapping("/articlesByMonth")
	public String articlesByCreateTime(HttpServletRequest request, Model model){
		String month = request.getParameter("month");
		List<Article> articleList = articleService.queryArticleListByCreateTime(month);
		// 获取文章时间列表
		List<String> timeList = articleService.getArticleTimeList();
		// get article tags
		List<String> tagList = articleService.getArticleTagList();
		model.addAttribute("articleList", articleList);
		model.addAttribute("timeList", timeList);
		model.addAttribute("tagList", tagList);
		return "index";
	}
	@RequestMapping("/articlesByTag")
	public String articlesByTag(HttpServletRequest request, Model model){
		String tag = request.getParameter("tag");
		List<Article> articleList = articleService.queryArticleListByTag(tag);
		// 获取文章时间列表
		List<String> timeList = articleService.getArticleTimeList();
		// get article tags
		List<String> tagList = articleService.getArticleTagList();
		model.addAttribute("articleList", articleList);
		model.addAttribute("timeList", timeList);
		model.addAttribute("tagList", tagList);
		return "index";
	}

	@RequestMapping({ "/article" })
	public String viewArticle(HttpServletRequest request, Model model) {
		String id = request.getParameter("id");
		Article article = this.articleService.queryArticleById(id);
		model.addAttribute("article", article);
		return "index";
	}
}

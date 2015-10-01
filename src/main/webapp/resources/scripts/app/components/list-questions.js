var QuestionsBox = React.createClass({
    displayName: 'QuestionsBox',
    loadQuestionsFromServer: function (){
	    $.get("http://localhost:8080/questions", function (result){
		    console.log(result);
		    this.setState({
			    data: result._embedded.questions
		    });
	    }.bind(this));
    },
    getInitialState: function (){
	    return {
		    data: []
	    };
    },
    componentDidMount: function (){
	    this.loadQuestionsFromServer();
    },
    render: function (){
    	var questionItems = this.props.data.map(function(comment, index) {
    	      return (<ListGroupItem>{comment.content}</ListGroupItem>);
    	    	    });
	    return (<ListGroup>{questionItems}</ListGroup>, questionItems));
    }
});

React.render(<QuestionsBox data={this.state.data} ></QuestionsBox>, document.getElementById('content'));
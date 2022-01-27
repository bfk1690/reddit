import {Text, View, StyleSheet, FlatList, Image} from 'react-native';
import React, {Component} from 'react';
import {theme} from '../../../utils/theme';
import {gh} from '../../../utils/functions';
import {gethotlist} from '../../../utils/services';
import HotList from '../../../components/HotList';
import * as Actions from '../../../redux/actions';
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotList: [],
      after: null,
      isLoading: true,
      dontShowFooter: true,
    };
    this.duringMomentum = false;
  }

  componentDidMount() {
    this.getHotList();
    Actions.showsearch();
  }

  getHotList = () => {
    const {after} = this.state;
    gethotlist(after)
      .then(res => {
        console.log(res, 'hot list response');
        this.setState({
          hotList: res.data.data.children,
          after: res.data.data.after,
          isLoading: false,
        });
      })
      .catch(e => {
        this.setState({
          isLoading: false,
        });
      });
  };

  renderList = (item, index) => {
    return <HotList item={item} index={index} />;
  };

  renderHeader = () => {
    return <Text>Hot Posts</Text>;
  };

  //İnfinitie scroll
  handleLoadMore = () => {
    if (!this.duringMomentum) {
      this.setState(
        {
          dontShowFooter: false,
        },
        () => {
          gethotlist(this.state.after).then(res => {
            if (res.data.data.children.length > 0) {
              const data = [...this.state.hotList, ...res.data.data.children];
              this.setState(
                {
                  hotList: data,
                  after: res.data.data.after,
                },
                () => {
                  console.log(this.state.hotList, 'JOTLİST');
                },
              );
            } else {
              this.setState({
                dontShowFooter: true,
              });
              this.duringMomentum = true;
            }
          });
        },
      );
      this.duringMomentum = true;
    }
  };

  renderFooter = () => {
    if (this.state.dontShowFooter) return null;
    return (
      <View style={{marginTop: gh(5), marginBottom: gh(5)}}>
        <Image
          source={require('../../../assets/reddit_loading.gif')}
          style={s.gif}
        />
      </View>
    );
  };

  render() {
    const {hotList, isLoading} = this.state;
    return (
      <View style={s.container}>
        <View style={s.search} />

        {isLoading ? (
          <View style={s.loading}>
            <Image
              source={require('../../../assets/reddit_loading.gif')}
              style={s.gif}
            />
          </View>
        ) : (
          <FlatList
            data={hotList}
            keyExtractor={(item, index) => item + index}
            renderItem={({item, index}) => this.renderList(item, index)}
            ListHeaderComponent={this.renderHeader}
            //LOAD MORE
            onEndReached={this.handleLoadMore}
            onEndReachedThreshold={0.7}
            onMomentumScrollBegin={() => {
              this.duringMomentum = false;
            }}
            ListFooterComponent={this.renderFooter}
          />
        )}
      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.backgroundBlack,
  },
  search: {
    backgroundColor: theme.backgroundGray,
    width: '100%',
    height: gh(70),
  },
  gif: {
    width: gh(50),
    height: gh(50),
    alignSelf: 'center',
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;

import { shallowMount } from "@vue/test-utils";
import PostDashboard from "@/modules/PostsDashboard"
import PostsList from "@/components/PostsList"
import ActionsList from "@/components/ActionsList"
import * as PostServices from "../../src/services/PostServices";
import mock from "./mock"

describe("PostDashboard", () => {
    beforeEach(() => {
        PostServices.getPosts = jest.fn().mockResolvedValue({data: [...mock]});
    })

    it("renders the initial posts in the right order with empty actionslist", async () => {
        const wrapper = shallowMount(PostDashboard)
        await wrapper.vm.$nextTick()
        const postsList = wrapper.findComponent(PostsList);
        const actionsList = wrapper.findComponent(ActionsList);
        expect(postsList.props("posts")).toHaveLength(5);
        expect(postsList.props("posts")).toEqual(mock);
        expect(actionsList.props("postsOrderActions")).toHaveLength(0);
    })

    it("changes the post with id 1 to the second and post with id 2 to first and add it to actionsList", async () => {
        const wrapper = shallowMount(PostDashboard)
        await wrapper.vm.$nextTick()
        wrapper.findComponent(PostsList).vm.$emit("order-changed", 0, 1)
        const actionsList = wrapper.findComponent(ActionsList);
        const newPosts = wrapper.findComponent(PostsList).props("posts");
        expect(actionsList.props("postsOrderActions")).toHaveLength(1);
        expect(newPosts[0].id).toBe(2);
        expect(newPosts[1].id).toBe(1);
    })
    it("will undo the last action if the first time travel is clicked", async () => {
        const wrapper = shallowMount(PostDashboard)
        await wrapper.vm.$nextTick()
        wrapper.findComponent(PostsList).vm.$emit("order-changed", 0, 1)
        expect(wrapper.findComponent(ActionsList).props("postsOrderActions")).toHaveLength(1);
        wrapper.findComponent(ActionsList).vm.$emit("item-popped", 0)
        await wrapper.vm.$nextTick()
        expect(wrapper.findComponent(ActionsList).props("postsOrderActions")).toHaveLength(0);
        const newPosts = wrapper.findComponent(PostsList).props("posts");
        expect(newPosts[0].id).toBe(1);
        expect(newPosts[1].id).toBe(2);
    })
})